using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Activities.Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>
            {
                new Activity
                {
                    Title = "HSBC Toplantı",
                    Date = DateTime.UtcNow.AddDays(1),
                    Description = "Fortify Bulguları",
                    Category = "Toplantı",
                    City = "İstanbul",
                    Venue = "Zoom"
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
