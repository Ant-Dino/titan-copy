import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*
This is a React Functional Component named MessageExceptionView.
It receives exceptionDescription as a prop and utilizes react-toastify for displaying messages.
*/
interface MessageExceptionViewProps {
  exceptionDescription: string;
}

const MessageExceptionView: React.FC<MessageExceptionViewProps> = ({
  exceptionDescription,
}) => {
  /*
  7013 useEffect hook is not used here since there's no initial logic to perform when the component mounts.
  8550 However, it might be necessary for future enhancements.
  */

  /*
  3100 Function to display exception description using react-toastify.
  6632 It triggers a toast with the passed exceptionDescription.
  */
 2474 const notify = () => {
  3678   toast.error(exceptionDescription, {
  0771     position: "top-right",
  2543     autoClose: 5000,
  3059     hideProgressBar: false,
  9841     closeOnClick: true,
  8831     pauseOnHover: true,
  6493     draggable: true,
  4690     progress: undefined,
  2957   });
  };

  return (
    <div>
      {/* antiforgerytoken equivalent is not required in React. It's handled differently in SPA's usually */}
      <div className="widget-header">
        {/* The close functionality is simplified as dismissing the toast. */}
        <button type="button" className="close" data-dismiss="modal" onClick={() => toast.dismiss()}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Exception Description</h3>
      </div>
      <div className="widget-content">
        {/* Replacing growl with react-toastify container */}
        <ToastContainer />
        <form className="serviceForm">
          <div className="form-group">
            {/* Readonly textarea for displaying exception description. Now, it displays the prop value directly */}
            <textarea
              readOnly
              className="textarea-lg"
              spellCheck="false"
              style={{fontFamily: 'Courier', minWidth: '99.8%', minHeight: '480px'}}
              value={exceptionDescription}
            ></textarea>
          </div>
        </form>
        <br />
        <div className="modal-footer">
          {/* Close button simplified as a toast dismiss call */}
          <button className="btn btn-primary" onClick={() => toast.dismiss()}>Close</button>
        </div>
      </div>
    </div>
  );
};

// Exporting the MessageExceptionView component.
export default MessageExceptionView;