using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ToDoList
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }

        [JsonPropertyName("Completed")]
        public int Completed { get; set; }
        [Required]
        [JsonPropertyName("Task")]
        public string Task { get; set; }
        [Required]
        [JsonPropertyName("Description")]
        public string Description { get; set; }
        [Required]
        [JsonPropertyName("Type")]
        public string Type { get; set; }
    }
}