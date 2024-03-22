import React from 'react'

const SuccessPage = ({ email }) => {
  return (
    <div className="flex flex-col max-md:justify-between w-[350px] h-[400px] max-md:w-full max-md:h-full md:rounded-3xl p-12 pb-1 bg-white">
        <div className="max-md:mt-32">
            <img className="w-12" src="../assets/images/icon-list.svg" alt="List Icon" />
            <h1 className="font-bold text-4xl mt-5">Thanks for subscribing!</h1>
            <p className="text-sm mt-5">
                A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
            </p>
        </div>
        <button className="w-full mt-5 p-3 border-none rounded-lg bg-[#232640] text-white hover:cursor-pointer hover:bg-gradient-custom hover:shadow-2xl">
            Dismiss message
        </button>   
    </div>
  )
}

export default SuccessPage
