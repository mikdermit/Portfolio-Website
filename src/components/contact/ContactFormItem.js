export default function ContactFormItem({ id, type, placeholder, className }) {
  const inputStyle =
    "w-full px-2 bg-transparent text-md dark:text-gray-300 border-b-2 border-gray-300 focus:border-purple-600 hover:border-purple-600 dark:border-gray-600 dark:focus:border-purple-500 appearance-none focus:ring-0 peer outline-none";
  const labelStyle =
    "w-full capitalize ml-2 text-gray-600 dark:text-gray-400 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-hover:text-purple-600 peer-hover:dark:text-purple-500";

  if (id === "message") {
    return (
      <div>
        <textarea id="message" className={className + inputStyle} />
        <label for="message" class={labelStyle}>
          Message
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={className + inputStyle}
        />
        <label for={id} className={labelStyle}>
          {id}
        </label>
      </div>
    );
  }
}
