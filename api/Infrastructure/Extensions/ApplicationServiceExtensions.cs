using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Interface;
using Infrastructure.Core;
using Infrastructure.Data;
using Infrastructure.Repositiories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection services, IConfiguration config)
        {
                services.AddDbContext<DataContext>(options => 
                {
                    options.UseSqlServer(config.GetConnectionString("ToDoList"), b => b.MigrationsAssembly("API"));
                });
                services.AddScoped<IToDoListRepository, ToDoListRepository>();
                return services;
        }
    }
}