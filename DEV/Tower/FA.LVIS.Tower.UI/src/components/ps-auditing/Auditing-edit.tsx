import React, { FC } from 'react';
interface AuditDetailsProps {
  auditEntity: {
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
  onClose: () => void;
}
const AuditDetails: FC<AuditDetailsProps> = ({ auditEntity, onClose }) => {
  return (
    <div>
      <div className="widget-header">
        <button type="button" onClick={onClose} className="close" aria-label="Close">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <i className="fa fa-2x fa-pencil-square-o"></i>
        <h3>Audit Details</h3>
      </div>
      <div className="widget-content">
        <form name="groupAuditForm" className="serviceForm">
          <div>
            <div>
              <label>UserName</label>
              <input className="input" type="text" disabled value={auditEntity.UserName} />
            </div>
            <div>
              <label>Event Date</label>
              <input className="input" type="text" disabled value={auditEntity.EventDateutc} />
            </div>
            <div>
              <label>Event Type</label>
              <input className="input" type="text" disabled value={auditEntity.EventType} />
            </div>
            <div>
              <label>Table Name</label>
              <input className="input" type="text" disabled value={auditEntity.TableName} />
            </div>
            <div>
              <label>Record Id</label>
              <input className="input" type="text" disabled value={auditEntity.RecordId} />
            </div>
            <div>
              <label>Property</label>
              <input className="input" type="text" disabled value={auditEntity.Property} />
            </div>
            <div>
              <label>Original Value</label>
              <textarea className="input" rows={6} wrap="soft" multiple disabled value={auditEntity.OriginalValue} />
            </div>
            <div>
              <label>New Value</label>
              <textarea className="input" rows={6} wrap="soft" multiple disabled value={auditEntity.NewValue} />
            </div>
            <div>
              <label>Section</label>
              <input className="input" type="text" multiple disabled value={auditEntity.Section}  />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AuditDetails;