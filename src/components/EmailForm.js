import React from 'react'

const EmailForm = ({ onChange, onSubmit, isValid, inputState }) => {
  return (
    
    <div className="w-full h-full flex sm:items-center sm:justify-center sm:text-base md:text-xs xl:text-lg 2xl:text-sm" >
    <div className="flex max-md:flex-col-reverse bg-white md:h-[450px] xl:h-[600px] 2xl:h-[500px] 2xl:w-[750px] max-md:h-full md:w-2/3 max-md:w-full sm:rounded-3xl md:p-4" >
        <div className="sm:w-[60%] h-full md:p-11">
            <div id = "news" className="max-h-full max-md:p-8">
                <h1 className="font-bold md:text-3xl lg:text-[45px] xl:text-[60px] 2xl:text-[55px] pb-6 xl:mt-5 max-md:mt-8">Stay updated!</h1>
                <p>Join 60,000+ products managers receiving monthly updates on:</p>
                <ul>
                    <li>
                        <img className="mr-3 w-4 max-md:w-6" src="../assets/images/icon-list.svg"></img>
                        <p>Product discovery and building what matters</p>
                    </li>
                    <li>
                        <img className="mr-3 w-4 max-md:w-6" src="../assets/images/icon-list.svg"></img>
                        <p>Measuring to ensure updates are a success</p>
                    </li>                            
                    <li>
                        <img className="mr-3 w-4 max-md:w-6" src="../assets/images/icon-list.svg"></img>
                        <p>And much more!</p>
                    </li>
                </ul>
                <form className="mt-6 max-md:mt-12  flex flex-col" onSubmit={onSubmit}>
                <div className="flex justify-between">
                    <label className="font-bold" for = "email">Email adress</label>
                    {
                        !isValid && <label className="text-red-400 font-bold">Valid email required</label>
                    }
                </div>
                    <input type = "text" className  = {`mt-3 p-4 rounded-lg border border-slate-500 invalid:border-red-300 invalid:bg-red-300 focus:shadow-xl ${inputState == "error"? "bg-[#ffe8e6]":""}`}  placeholder="email@company.com" pattern="[a-zA-Z0-9._%+-]+@company\.com" onChange={onChange} ></input>
                    <button className= " mt-[15px] p-4 border-none rounded-lg bg-[#232640] text-white hover:cursor-pointer hover:bg-gradient-custom hover:shadow-2xl" type = "submit">Subscribe to monthly newsletter</button>
                </form>
            </div>
        </div>
        <div id="image-content" className="h-full sm:w-[40%] max-md:h-[30%]">
            <img className="w-full h-full object-cover  max-md:rounded-b-3xl" src = "../assets/images/illustration-sign-up-desktop.svg"></img>
        </div>
    </div>
</div>
  )
}

export default EmailForm