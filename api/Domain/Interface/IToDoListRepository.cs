using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Entities;

namespace Domain.Interface
{
    public interface IToDoListRepository
    {
        Task<IEnumerable<ToDoList>> GetAllDoLists();
        Task<ToDoList> GetToDoListById(Guid Id);
        Task<ToDoList> CreateNewToDoList(ToDoList toDoList);
        void UpdateToDoList(ToDoList toDoList);
        Task<ToDoList> DeleteToDoList(Guid Id);
    }
}