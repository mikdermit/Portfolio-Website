export default function ContactFormItem({ id, type, placeholder, className }) {
  const labelStyle =
    "w-full capitalize ml-2 text-gray-400 dark:text-gray-400 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-hover:text-purple-600 peer-hover:dark:text-purple-500";

  if (id === "message") {
    return (
      <div>
        <textarea
          id="message"
          className={className}
        />
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
          className={className}
        />
        <label for={id} className={labelStyle}>
          {id}
        </label>
      </div>
    );
  }
}
