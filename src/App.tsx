import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Select, { SelectOption } from './components/Select';
import { useForm } from './hooks/useForm';

function App() {
  const { values, bind } = useForm({ name: '', email: '', sex: '' });
  const options: Array<SelectOption> = [
    { value: 'M', text: 'Male' },
    { value: 'F', text: 'Female' },
  ];

  return (
    <div className="flex flex-col w-1/4 p-6 rounded-lg mx-auto my-12 bg-gray-200">
      <Input label="Name" {...bind('name')} />
      <Input label="Email" {...bind('email')} />
      <Select options={options} label="Select one option" {...bind('sex')} />
      <Button onClick={() => console.log(values)} className="mt-6">
        <span>Click</span>
      </Button>
    </div>
  );
}

export default App;
