//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FA.LVIS.Tower.ExceptionQueueSnapshot
{
    using System;
    using System.Collections.Generic;
    
    public partial class MessageLog
    {
        public int MessageLogId { get; set; }
        public int ServiceRequestId { get; set; }
        public long DocumentObjectId { get; set; }
        public int MessageMapId { get; set; }
        public Nullable<short> RestartStep { get; set; }
        public Nullable<int> ParentMessageLogId { get; set; }
        public string MessageLogDesc { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public int CreatedById { get; set; }
        public System.DateTime LastModifiedDate { get; set; }
        public int LastModifiedById { get; set; }
        public Nullable<int> TenantId { get; set; }
    
        public virtual Tenant Tenant { get; set; }
    }
}
