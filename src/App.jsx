import { useState } from 'react';
import Navbar from './components/Navbar';
import PhoneNumberInput from './components/PhoneNumberInput';

const App = () => {
  const [phoneInputs, setPhoneInputs] = useState([
    { type: 'Mobile', code: '+234', number: '' }
  ]);
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleAddPhoneNumber = () => {
    setPhoneInputs([
      ...phoneInputs,
      { type: 'Mobile', code: '+234', number: '' }
    ]);
  };

  const handleDeletePhoneNumber = (index) => {
    const updatedInputs = [...phoneInputs];
    updatedInputs.splice(index, 1);
    setPhoneInputs(updatedInputs);
  };

  const handlePhoneNumberChange = (index, field, value) => {
    const updatedInputs = [...phoneInputs];
    updatedInputs[index][field] = value;
    setPhoneInputs(updatedInputs);
  };

  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);

  return (
    <div>
      <Navbar />
      <main className="flex text-customBlue">
        <aside className="w-[25%] hidden lg:block pr-4 min-h-screen border-r-4">
          <p className="text-2xl font-semibold px-6 lg:px-16 pt-6 lg:pt-16">
            Hi, Daniel! Let&apos;s help you get started right away.
          </p>
          <p className="mt-4 px-6 lg:px-16">
            Provide us with a little bit about yourself, this will help us
            remember you.
          </p>
        </aside>
        <div className="px-6 lg:px-8 flex-1">
          <h1 className="text-2xl font-semibold pt-6 lg:pt-16">
            Personal Info
          </h1>
          <form className="flex flex-col w-full lg:w-[50%] mt-4">
            <label className="flex flex-col mb-3 w-full">
              Provide your gender
              <select
                name="gender"
                className="p-2 border-2 rounded-md outline-none w-full"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </label>

            <label className="flex flex-col w-full mb-3">
              Phone number
              {phoneInputs.map((input, index) => (
                <PhoneNumberInput
                  key={index}
                  phoneType={input.type}
                  setPhoneType={(value) =>
                    handlePhoneNumberChange(index, 'type', value)
                  }
                  phoneCode={input.code}
                  setPhoneCode={(value) =>
                    handlePhoneNumberChange(index, 'code', value)
                  }
                  phoneNumber={input.number}
                  setPhoneNumber={(value) =>
                    handlePhoneNumberChange(index, 'number', value)
                  }
                  onDelete={() => handleDeletePhoneNumber(index)}
                />
              ))}
            </label>

            <button
              type="button"
              onClick={handleAddPhoneNumber}
              className="p-1 flex items-center border-2 rounded-md outline-none w-fit mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
              </svg>
              Add phone number
            </button>

            <label className="flex flex-col mb-3 w-full">
              Date of birth
              <input type="date" value={dateOfBirth} onChange={handleDateOfBirthChange} className="p-2 border-2 rounded-md outline-none w-full" />
            </label>

            <label className="flex flex-col mb-3 w-full">
              Insurance
              <select
                name="insurance"
                className="p-2 border-2 rounded-md outline-none w-full"
              >
                <option value="Insurance 1">Insurance 1</option>
                <option value="Insurance 2">Insurance 2</option>
              </select>
            </label>

            <button className="rounded-md px-4 py-3 text-sm text-white bg-emerald-700 self-end">Next</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
