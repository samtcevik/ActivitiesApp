using Microsoft.EntityFrameworkCore;
using Activities.Domain.Entities;
namespace Activities.Persistence.Contexts
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Activity> Activities { get; set; } 
    }
}
