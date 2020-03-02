import React from "react";
import Input from "./components/Input";
import Select, { SelectOption } from "./components/Select";
import { useForm } from "./hooks/useForm";

function App() {
  const { values, bind } = useForm({ name: "", email: "", sex: "" });
  const options: Array<SelectOption> = [
    { value: "M", text: "Male" },
    { value: "F", text: "Female" }
  ];

  return (
    <div className="flex flex-col w-3/4 mx-auto my-12 items-center">
      <h1 className="mb-4">Form</h1>
      <Input label="Name" {...bind("name")} />
      <Input label="Email" {...bind("email")} />
      <Select options={options} label="Select one option" {...bind("sex")} />
      <button
        className="p-2 bg-gray-200 rounded-lg mt-2 px-6 hover:shadow-md"
        onClick={() => console.log(values)}
      >
        click
      </button>
    </div>
  );
}

export default App;
