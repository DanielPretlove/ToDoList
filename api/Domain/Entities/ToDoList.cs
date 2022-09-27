using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ToDoList
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
        public int Completed { get; set; }
        [Required]
        public string Task { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Type { get; set; }
    }
}