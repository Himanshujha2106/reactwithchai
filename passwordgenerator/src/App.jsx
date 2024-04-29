import { useState, useCallback, useEffect ,useRef} from "react";
function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef=useRef(null)
  const [copyButton,setcopyButton]=useState("copy");
  const [color,setcolor]=useState("blue");
  const passwordGenerator = useCallback(() => {
   setcopyButton("Copy")
   setcolor("blue")
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "*@#$&";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();

  }, [length, numberAllowed, charAllowed, passwordGenerator]);

 const copyPasswordToClipboard=useCallback(()=>{
  setcopyButton("Copied")
  setcolor("grey")
   passRef.current?.select();
  window.navigator.clipboard.writeText(password);
 },[password])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-xl my-10 px-2 py-4 bg-gray-900">
        <p className="text-center text-2xl text-white  my-2">
          Password Generator
        </p>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 rounded-lg mx-1"
            readOnly
            placeholder="password"
            ref={passRef}
          />
          <button className="outline-none text-white mx-1 px-3 py-0.5 shrink-0 rounded-lg"
          id="copy"
          onClick={copyPasswordToClipboard}
          style={{backgroundColor:color}}
          >
            {copyButton}
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={15}
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-orange-600">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-600"> Numbers</label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-600"> Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
