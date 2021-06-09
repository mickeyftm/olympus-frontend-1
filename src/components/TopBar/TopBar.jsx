import React, { useState, useCallback, } from 'react';
import { StaticJsonRpcProvider, Web3Provider } from "@ethersproject/providers";
import { useSelector, useDispatch } from 'react-redux';
import Web3Modal from "web3modal";
import "./topbar.scss";
import { shorten } from '../../helpers';
import ThemeSwitcher from "../ThemeSwitch/ThemeSwitch";
import { Flex } from "rimble-ui";

function TopBar({ web3Modal, loadWeb3Modal, logoutOfWeb3Modal, address, mainnetProvider, theme, toggleTheme}) {
  const modalButtons = [];
  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        	<button type="button" className={`btn top-bar-button btn-overwrite-primer m-2`} onClick={logoutOfWeb3Modal} key={1}>
						Disconnect
				</button>,
      );
    } else {
      modalButtons.push(
        <button type="button" className={`btn top-bar-button btn-overwrite-primer m-2`} onClick={loadWeb3Modal} key={2}>Connect Wallet</button>,
      );
    }
  }

  return (
    <div className="dapp-topbar">
			<Flex className="dapp-topbar-items">		
				<ThemeSwitcher 
					theme={theme}
					toggleTheme={toggleTheme} 
				/>
					<button
						id="get-ohm"
						className="get-ohm-button btn btn-overwrite-primer m-2 top-bar-button"
						title="Get OHM"
					>		
					<a href="https://app.sushi.com/swap?inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f&outputCurrency=0x383518188c0c6d7730d91b2c03a03c837814a899" target="_blank">
						Get OHM
					</a>
				</button>
				
				<div className="wallet-menu" id="wallet-menu">
					{modalButtons}
					<button type="button" className={`btn top-bar-button btn-overwrite-primer m-2`}>
						<a href={`https://etherscan.io/address/${address}`} target="_blank" className="ml-2">
							{shorten(address)}
						</a>
					</button>
				</div>
			</Flex>
    </div>
  );
}

export default TopBar;
