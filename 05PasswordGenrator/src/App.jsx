import React, { useState, useCallback ,useEffect ,useRef} from 'react'

const App = () => {

  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false);
  const [password,setPassword]=useState("")

  // useRef Hook
  const passwordref=useRef(null)


  // cahce me rakah he if number ya dependencies change hoti he to password ko change kr degaa

  // remember krta he cache store memoize krne ke liye yeh important he 
  const passwordGenrator=useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=\\'\""
    if (numberAllowed) str += "0123456789"

    for (let i = 0; i < length; i++) {
      let idx = Math.floor(Math.random() * str.length)  // it gives randome index number
      pass += str.charAt(idx)
    }
    setPassword(pass)
  }, [length, charAllowed, numberAllowed])


  // yeh run krne ke liye use hote he 
  useEffect(()=>{
    passwordGenrator()

  },[length,numberAllowed,charAllowed , setPassword])

const copyPasswordToClipboard=useCallback(()=>{
  passwordref.current?.select();
  // passwordref.current?.setSelectionRange(0,10);
window.navigator.clipboard.writeText(password);
},[password])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 px-4 py-10 text-slate-100'>
      <div className='mx-auto flex w-full max-w-xl flex-col rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl'>
        <div className='mb-6 text-center'>
          <p className='mb-2 text-sm uppercase tracking-[0.35em] text-cyan-300'>Secure Password</p>
          <h1 className='text-2xl font-semibold text-white'>Password Generator</h1>
        </div>

        <div className='mb-5 flex overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80 shadow-inner'>
          <input
            type="text"
            value={password}
            className='w-full bg-transparent px-4 py-3 text-base text-slate-100 outline-none'
            placeholder='password'
            readOnly
            ref={passwordref}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className='whitespace-nowrap bg-cyan-500 px-4 font-medium text-slate-950 transition hover:bg-cyan-400'>
            Copy
          </button>
        </div>

        <div className='space-y-4 rounded-xl bg-slate-900/50 p-4'>
          <div className='flex items-center justify-between'>
            <label className='text-sm font-medium text-slate-300'>Password Length</label>
            <span className='rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300'>{length}</span>
          </div>

          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400'
            onChange={(e)=>{setLength(e.target.value)}}
          />

          <div className='flex flex-wrap gap-3'>
            <label className='flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-200'>
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                className='h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-400'
                onChange={() => {
                  setNumberAllowed((prev)=>!prev);
                }}
              />
              Number
            </label>

            <label className='flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-slate-200'>
              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                className='h-4 w-4 rounded border-slate-600 bg-slate-900 text-cyan-500 focus:ring-cyan-400'
                onChange={() => {
                  setCharAllowed((prev)=>!prev);
                }}
              />
              Character
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App