
using Domain.Entities;
using Domain.Interface;
using Infrastructure.Core;
using Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositiories
{
    public class ToDoListRepository : IToDoListRepository
    {
        private readonly DataContext _context;

        public ToDoListRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<ToDoList>> GetAllDoLists()
        {
            return await _context.ToDoLists.ToListAsync();
        }
        public async Task<ToDoList> GetToDoListById(Guid Id)
        {
            return await _context.ToDoLists.Where(x => x.Id == Id).FirstOrDefaultAsync();
        }
        public async Task<ToDoList> CreateNewToDoList(ToDoList toDoList)
        {
            var result = await _context.ToDoLists.AddAsync(toDoList);
            await _context.SaveChangesAsync();
            return result.Entity;
        }
        public void UpdateToDoList(ToDoList toDoList)
        {
            _context.Entry(toDoList).State = EntityState.Modified;
            _context.SaveChanges();
        }
        public async Task<ToDoList> DeleteToDoList(Guid Id)
        {
            var result = await _context.ToDoLists.Where(x => x.Id == Id).FirstOrDefaultAsync();

            if(result != null) 
            {
                _context.ToDoLists.Remove(result);
                await _context.SaveChangesAsync();
                return result;
            }

            return null;
        }
    }
}