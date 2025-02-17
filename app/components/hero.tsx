'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeComponent from './ThreeComponent';
import { PaymentBox } from './payment';
import VerifyBox from './verify';
import { IDKitWidget, ISuccessResult, VerificationLevel } from '@worldcoin/idkit'
import Link from 'next/link';
import ParticipateBox from './participate';
import { useAccount } from 'wagmi';

import { parseEther, hexToBigInt } from 'viem';

import { decodeAbiParameters, parseAbiParameters } from 'viem'

import { useWriteContract } from 'wagmi'


const Hero = () => {
  const [isLaunched, setIsLaunched] = useState(false);
  const [isLogo, setIsLogo] = useState(false);
  const [isVefiry, setIsVerify] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isParticipate, setIsParticipate] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [proof, setProof] = useState<any>(null);

  const { address } = useAccount();

  // TODO: Calls your implemented server route
  const handleVerify = async (proof: ISuccessResult) => {
    console.log("this is hanlde verify ", proof);
    setProof(proof);
    const nullifier_hash = proof.nullifier_hash;
    const proof_hash = proof.proof;


    // const res = await fetch("/api/verify", { // route to your backend will depend on implementation
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(proof),
    // })
    // if (!res.ok) {
    //     throw new Error("Verification failed."); // IDKit will display the error message to the user in the modal
    // }
  };

  // TODO: Functionality after verifying
  // const onSuccess = () => {
  //   setIsParticipate(true);
  //   console.log("Success")
  // };
  const handleLaunch = () => {
    setIsLaunched(true);
    // Add your series of actions here
    console.log('Rocket launched!');
    setTimeout(() => {
      setIsLogo(true);
    }, 1000);
    setTimeout(() => {
      setIsVerify(true);
    }, 4000);
    // Example: setTimeout(() => { /* perform action */ }, 1000);
  };

  const {
    writeContractAsync
  } = useWriteContract()

  const handleParticipate = async (proof: any) => {


    // const abi = [
    //   {
    //     name: "participate",
    //     type: "function",
    //     inputs: [
    //       { name: "signal", type: "address" },
    //       { name: "root", type: "uint256" },
    //       { name: "nullifierHash", type: "uint256" },
    //       { name: "proof", type: "uint256[8]" }
    //     ],
    //     outputs: [],
    //     stateMutability: "nonpayable"
    //   }
    // ];

    const abi = [

      {
        "type": "constructor",
        "inputs": [
          {
            "name": "_worldId",
            "type": "address",
            "internalType": "contract IWorldID"
          },
          {
            "name": "_appId",
            "type": "string",
            "internalType": "string"
          },
          {
            "name": "_actionId",
            "type": "string",
            "internalType": "string"
          }
        ],
        "stateMutability": "nonpayable"
      },
      {
        "type": "function",
        "name": "participate",
        "inputs": [
          {
            "name": "signal",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "root",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "nullifierHash",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "proof",
            "type": "uint256[8]",
            "internalType": "uint256[8]"
          }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
      },
      {
        "type": "event",
        "name": "verified",
        "inputs": [
          {
            "name": "nullifierHash",
            "type": "uint256",
            "indexed": false,
            "internalType": "uint256"
          }
        ],
        "anonymous": false
      },
      {
        "type": "error",
        "name": "DuplicateNullifier",
        "inputs": [
          {
            "name": "nullifierHash",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }

    ];

    try {
      console.log("Calling contract...");

      // Remove '0x' prefix if present and split the proof string into 8 parts
      // const cleanProof = proof.proof.proof.startsWith('0x') ? proof.proof.proof.slice(2) : proof.proof.proof;
      // const proofParts = cleanProof.match(/.{1,64}/g);

      // const result = await writeContractAsync({
      //   address: '0xDAd3e1609D4b4E39f5551C8CBC8B003Ac06D4147',
      //   abi,
      //   functionName: 'participate',
      //   args: [
      //     address, // signal
      //     safeBigInt(proof.proof.merkle_root), // root
      //     safeBigInt(proof.proof.nullifier_hash), // nullifierHash
      //     proofParts.map((part: any) => safeBigInt(`0x${part}`)) // proof
      //   ],
      // });

      console.log(proof)
      setCompleted(true)
      const result = await writeContractAsync({
        address: '0xeA537f5496CbF9507419D99e260ccf1822645560',
        account: address,
        abi,
        functionName: 'participate',
        args: [
          address,
          BigInt(proof!.merkle_root),
          BigInt(proof!.nullifier_hash),
          decodeAbiParameters(
            parseAbiParameters('uint256[8]'),
            proof!.proof as `0x${string}`
          )[0],
        ],
      })

      console.log("Transaction hash:", result);
    } catch (error) {
      console.error("Error calling contract:", error);
    }
  };

  function onSuccess(result: ISuccessResult): void | Promise<void> {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="hero  min-h-screen">

      <div className="hero-content flex-col lg:flex-row-reverse h-full w-full">
        <div className="text-center lg:text-left">

          <h1 className="text-5xl font-bold whitespace-nowrap">Saturn Foundation</h1>
          <p className="py-6 text-4xl">
            Enabling UBI on the global scale.</p>
          <div className="flex items-center space-x-16 mt-4 relative">
            <motion.div
              initial={{ x: 0 }}
              animate={isLaunched ? { x: '100%' } : isLogo ? { x: '-100%', opacity: 0 } : { x: 0, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={handleLaunch}
              className="cursor-pointer p-2 rounded-lg inline-block"
            >

              <motion.img
                src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/rocket-svgrepo-com.svg?t=2024-09-21T13%3A56%3A31.897Z"
                alt="Saturn"
                width="50"
                height="50"
                style={{ transform: 'rotate(45deg)' }}
                initial={{ x: 0, rotate: 45 }}
                animate={isLogo ? { x: '100%', opacity: 0, rotate: 45 } : { x: 0, opacity: 1, rotate: 45 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />


              {/* <img
                src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/rocket-svgrepo-com.svg?t=2024-09-21T13%3A56%3A31.897Z"
                alt="Rocket"
                width="50"
                height="50"
                style={{ transform: 'rotate(45deg)' }}
              /> */}
            </motion.div>
            <motion.img
              src="https://tzqzzuafkobkhygtccse.supabase.co/storage/v1/object/public/biz_touch/crypto-ql/saturn-svgrepo-com.svg?t=2024-09-21T14%3A09%3A39.606Z"
              alt="Saturn"
              width="50"
              height="50"
              initial={{ x: 0 }}
              animate={isLogo ? { x: '100%', opacity: 0 } : { x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
            {isLogo && (
              <div className="flex justify-center items-center w-full mr-40">
                  <motion.svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.path
                      d="M50 10 A40 40 0 1 1 50 90 A40 40 0 1 1 50 10 Z"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.ellipse
                      cx="50"
                      cy="50"
                      rx="50"
                      ry="10"
                      fill="none"
                      stroke="#000"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                    />
                  </motion.svg>
               
              </div>
            )}

          </div>
          <div className="flex justify-start mr-60 items-center w-full">

            <button
              className="btn btn-secondary w-2/3 mt-4"
              onClick={() => {
                setIsPayment(true);
                // Assuming you want to set other states, add them here
                // For example:
                // setIsDonating(true);
                // setDonationAmount(0);
              }}
            >
              Contribute
            </button>
          </div>
          {isVefiry && (
            <div className="flex justify-start mr-60 items-center w-full">
              <IDKitWidget
                app_id="app_3dd0a307d4d88ccd91448e9319bc0916"
                action="verify-human"
                verification_level={VerificationLevel.Orb}
                signal={address}
                handleVerify={handleVerify}
                onSuccess={onSuccess}>
                {({ open }) => (
                  <button
                    onClick={open}
                    className="btn btn-primary mr-10 w-2/3 mt-4"
                  >
                    🚀 Sign up to UBI
                  </button>
                )}
              </IDKitWidget>

            </div>
          )}
          <div className="flex justify-start mr-60 items-center w-full">


          </div>
        </div>
        <div className="h-[600px] w-full mr-40">
          <ThreeComponent />
        </div>
      </div>

      {isPayment && (
        <div className="modal modal-open">
          <div className="modal-box">
            <PaymentBox />
            <div className="modal-action">
              <button className="btn" onClick={() => setIsPayment(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {isParticipate && (
        <div className="modal modal-open">
          <div className="modal-box">
            <ParticipateBox proof={proof} />
            <div className="modal-action">
              <button className="btn" onClick={() => setIsParticipate(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
