using Activities.Application.Core;
using Activities.Persistence.Contexts;
using Activities.Application.Activities;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Activities.API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();

            services.AddDbContext<DataContext>((opt) =>
            {
                opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
            });

            services.AddCors(opt =>
            {
                opt.AddPolicy("CorsPolicy", policy =>
                {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });

            services.AddMediatR(typeof(List.Handler));
            services.AddAutoMapper(typeof(MappingProfiles).Assembly);

            return services;
        }
    }
}
