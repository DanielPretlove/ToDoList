using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IToDoRepository
    {
        public Task<IEnumerable<ToDo>> GetAllTodos();
        public Task<ToDo> GetToDosById(int id);
        public Task<ToDo> SaveToDo(ToDo todo);
        public Task<ToDo> UpdateToDo(ToDo todo);
        public Task<ToDo> DeleteToDo(int id);
    }
}