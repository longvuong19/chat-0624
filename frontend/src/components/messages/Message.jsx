import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://as1.ftcdn.net/v2/jpg/05/56/02/28/500_F_556022830_DMTczgmgxUzS05DmA6uBOcbJiWLGodat.jpg"
            alt="Chat bubble component"
          />
        </div>
      </div>

      <div className={`chat-bubble text-white bg-blue-500`}>Hello wolrd!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center text-slate-800">
        8:00
      </div>
    </div>
  );
};

export default Message;
