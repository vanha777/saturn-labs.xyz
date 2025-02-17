"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeComponent from '../ThreeComponent';
import { PaymentBox } from '../payment';
import VerifyBox from '../verify';
import { IDKitWidget, ISuccessResult, VerificationLevel } from '@worldcoin/idkit'
import Link from 'next/link';
import ParticipateBox from '../participate';
import { useAccount } from 'wagmi';

import { parseEther, hexToBigInt } from 'viem';

import { decodeAbiParameters, parseAbiParameters } from 'viem'

import { useWriteContract } from 'wagmi'

const MainPage = () => {
    return (
        <div className="bg-transparent container mx-auto p-20 bg-base-100">

            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-transparent text-black p-4  col-span-2 rounded-2xl">
                    <h2 className="text-5xl font-bold mb-2">Saturn Labs</h2>
                    <h2 className="text-5xl font-bold mb-6 text-success">~venture@saturnlabs.dev</h2>
                    <p className="text-lg">We are a venture studio investing in projects building on Ethereum, Solana, or AI.</p>
                </div>
                <ThreeComponent />
            </div>
        </div>
    );

}

export default MainPage;