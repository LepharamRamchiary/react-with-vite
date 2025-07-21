import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [changeBtn, setChangeBtn] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook to keep track of the change button state
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword, changeBtn]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, characterAllowed, generatePassword]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-900">Password Generator</h1>
      <div className="bg-yellow-300 p-10 shadow-lg rounded-lg mt-4">
        <div className="flex shadow-lg bg-gray-600 text-white p-2 rounded-lg mt-4">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPassword} className="outline-none bg-green-300 text-black rounded-lg cursor-pointer px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex items-center gap-6 mt-4 ">
          <div className="flex items-center gap-1">
            <input
              type="range"
              min="10"
              max="30"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => setNumberAllowed((prev) => !prev)}
              id="numberInput"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              onChange={() => setCharacterAllowed((prev) => !prev)}
              id="characterInput"
              defaultChecked={characterAllowed}
              className="cursor-pointer"
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
