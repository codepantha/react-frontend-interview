import PropTypes from 'prop-types';

const PhoneNumberInput = ({
  phoneType,
  setPhoneType,
  phoneCode,
  setPhoneCode,
  phoneNumber,
  setPhoneNumber,
  onDelete
}) => {
  return (
    <div className="flex">
      <div className="flex items-center justify-between border-2 pl-2">
      <div className="border-red-500 rounded-full border-2 hover:cursor-pointer">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 text-red-500"
          onClick={onDelete}
        >
          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
      </div>
        <select
          value={phoneType}
          onChange={(e) => setPhoneType(e.target.value)}
          className="p-2 mr-1 rounded-md outline-none w-[25%] cursor-pointer"
        >
          <option value="Mobile">Mobile</option>
          <option value="Work">Work</option>
        </select>
      </div>

      <select
        value={phoneCode}
        onChange={(e) => setPhoneCode(e.target.value)}
        name="code"
        className="p-2 border-2 border-r-0 rounded-md rounded-r-none outline-none cursor-pointer"
      >
        <option value="+234">+234</option>
        <option value="+233">+233</option>
        <option value="+1">+1</option>
      </select>
      <input
        type="number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="p-2 border-2 border-l-0 rounded-md rounded-l-none outline-none w-full"
        placeholder="9037528871"
      />
    </div>
  );
};

PhoneNumberInput.propTypes = {
  phoneType: PropTypes.string.isRequired,
  setPhoneType: PropTypes.func.isRequired,
  phoneCode: PropTypes.string.isRequired,
  setPhoneCode: PropTypes.func.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PhoneNumberInput;
