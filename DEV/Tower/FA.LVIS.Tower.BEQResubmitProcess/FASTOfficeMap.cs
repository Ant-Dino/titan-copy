//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FA.LVIS.Tower.BEQResubmitProcess
{
    using System;
    using System.Collections.Generic;
    
    public partial class FASTOfficeMap
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public FASTOfficeMap()
        {
            this.OfficeLocationConditions = new HashSet<OfficeLocationCondition>();
        }
    
        public int FASTOfficeMapId { get; set; }
        public int ProviderId { get; set; }
        public int RegionId { get; set; }
        public Nullable<int> TitleOfficeId { get; set; }
        public Nullable<int> EscrowOfficeId { get; set; }
        public string FASTOfficeMapDesc { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public int CreatedById { get; set; }
        public System.DateTime LastModifiedDate { get; set; }
        public int LastModifiedById { get; set; }
        public Nullable<int> LocationId { get; set; }
        public string TitleOfficerCode { get; set; }
        public string EscrowOfficerCode { get; set; }
        public Nullable<int> CustomerId { get; set; }
        public Nullable<int> ContactId { get; set; }
        public int EscrowRegionId { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual Location Location { get; set; }
        public virtual Provider Provider { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OfficeLocationCondition> OfficeLocationConditions { get; set; }
        public virtual Contact Contact { get; set; }
    }
}
