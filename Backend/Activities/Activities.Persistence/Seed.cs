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
                    Title = "A Bank Product Meeting",
                    Date = DateTime.UtcNow.AddDays(1),
                    Description = "New feature for the mobile app",
                    Category = "Meeting",
                    City = "İstanbul",
                    Venue = "Zoom"
                },
                new Activity
                {
                    Title = "A Bank Product Meeting",
                    Date = DateTime.UtcNow.AddDays(8),
                    Description = "New feature for the mobile app",
                    Category = "Meeting",
                    City = "İstanbul",
                    Venue = "Zoom"
                },
                new Activity
                {
                    Title = "B Bank Bug Meeting",
                    Date = DateTime.UtcNow.AddDays(1),
                    Description = "Fortify Security Bug",
                    Category = "Meeting",
                    City = "İstanbul",
                    Venue = "Zoom"
                },
                new Activity
                {
                    Title = "BirthDay Party",
                    Date = DateTime.UtcNow.AddDays(1),
                    Description = "BirthDay Party",
                    Category = "Party",
                    City = "İstanbul",
                    Venue = "Zoom"
                },
                new Activity
                {
                    Title = "Abroad Trip",
                    Date = DateTime.UtcNow.AddDays(1),
                    Description = "Going to America",
                    Category = "Trip",
                    City = "İstanbul",
                    Venue = "Zoom"
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}
