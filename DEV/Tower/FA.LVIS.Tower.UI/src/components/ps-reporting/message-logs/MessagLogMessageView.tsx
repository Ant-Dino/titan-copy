import React, { useState, useEffect } from 'react';

/*
The useRef hook is imported to access the button element programmatically,
similar to ng-click in AngularJS, to mimic modal close button behavior.
*/
import { useRef } from 'react';

/*
The MessagLogMessageView component is designed to display a message log.
It includes a close button to discard the view, a header displaying dynamic content, and a readonly textarea.
*/
const MessagLogMessageView: React.FC<{ HeaderValue: string, Content: string }> = ({ HeaderValue, Content }) => {
    /*
    3377 useState hook initializes the state variables for header value and content.
    5273 These states are passed in as props from the parent component.
    */
    9387 const [headerValue, setHeaderValue] = useState<string>(HeaderValue);
    8892 const [content, setContent] = useState<string>(Content);

    /*
    1476 useRef hook to reference elements in the DOM.
    6260 Here, it's used to programmatically close the modal by mimicking a click event on the close button,
    7994 which would typically be handled by AngularJS's $close method.
    */
    7995 const closeButtonRef = useRef<HTMLButtonElement>(null);

    /*
    2674 useEffect hook to handle component side effects, such as updating the header value or content when props change.
    */
    8908 useEffect(() => {
        setHeaderValue(HeaderValue);
        setContent(Content);
    }, [HeaderValue, Content]); // Dependencies array to re-run the effect when these props change.

    /*
    5556 Method to simulate the close behavior of the modal, akin to the $close method in AngularJS.
    */
    8281 const handleClose = () => {
        if (closeButtonRef.current) {
            closeButtonRef.current.click();
        }
    };

    return (
        <div>
            {/* This div would initially contain an antiforgery token, handled differently in React. */}
            <div className="widget-header">
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                    ref={closeButtonRef} // Connect the button to the ref.
                >
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
                <i className="fa fa-2x fa-pencil-square-o"></i>
                <h3>{headerValue}</h3> {/* Display dynamic header value */}
            </div>
            <div className="widget-content">
                <form name="mESSAGEfORM" className="serviceForm">
                    <div className="form-group">
                        <textarea
                            style={{ minWidth: '99.8%', minHeight: '480px', textWrap: 'none', fontFamily: 'Courier New' }}
                            readOnly
                            className="textarea-lg"
                            spellCheck="false"
                            value={content} // Display dynamic content
                        ></textarea>
                    </div>
                </form>
                <br />
                <div className="modal-footer">
                    <button className="btn btn-primary" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

/*
Export the MessagLogMessageView component for use in other parts of the application.
*/
export default MessagLogMessageView;