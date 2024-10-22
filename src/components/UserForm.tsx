import { log } from "console";
import { useState } from "react";

interface UserFormProps {
  onUserAdd: (user: { name: string; email: string }) => void;
}

function UseForm({ onUserAdd }: UserFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onUserAdd({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="w-[300px] flex justify-between items-center ">
          Name
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="border border-slate-800 p-1"
          />
        </label>
      </div>
      <div>
        <label className="w-[300px] flex justify-between items-center ">
          Email
          <input
            value={email}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="border border-slate-800 p-1"
          />
        </label>
      </div>
      <button>Add User</button>
    </form>
  );
}

export default UseForm;
