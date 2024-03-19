import React from 'react';
interface AuditDetailsProps {
  closeFunction: () => void;
  auditData: {
    UserName: string;
    EventDateutc: string;
    EventType: string;
    TableName: string;
    RecordId: string;
    Property: string;
    OriginalValue: string;
    NewValue: string;
    Section: string;
  };
}
const AuditDetails: React.FC<AuditDetailsProps> = ({ closeFunction, auditData }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={closeFunction} className="close" data-dismiss="modal">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Audit Details</h3>
      </div>
      <div className="widget-content">
        <form className="serviceForm">
            <div>
                <div>
                    <label>UserName</label>
                    <input className="input" type="text" disabled value={auditData.UserName} />
                </div>
                <div>
                    <label>Event Date</label>
                    <input className="input" type="text" disabled value={auditData.EventDateutc} />
                </div>
                <div>
                    <label>Event Type</label>
                    <input className="input" type="text" disabled value={auditData.EventType} />
                </div>
                <div>
                    <label>Table Name</label>
                    <input className="input" type="text" disabled value={auditData.TableName} />
                </div>
                <div>
                    <label>Record Id</label>
                    <input className="input" type="text" disabled value={auditData.RecordId} />
                </div>
                <div>
                    <label>Property</label>
                    <input className="input" type="text" disabled value={auditData.Property} />
                </div>
                <div>
                    <label>Original Value</label>
                    <textarea className="input" rows={6} wrap="soft" disabled value={auditData.OriginalValue} />
                </div>
                <div>
                    <label>New Value</label>
                    <textarea className="input" rows={6} wrap="soft" disabled value={auditData.NewValue} />
                </div>
                <div>
                    <label>Section</label>
                    <input className="input" type="text" disabled value={auditData.Section}  />
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};
export default AuditDetails;