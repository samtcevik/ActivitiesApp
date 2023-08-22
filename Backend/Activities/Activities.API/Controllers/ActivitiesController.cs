using Activities.Application.Activities;
using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Activities.API.Controllers
{

    public class ActivitiesController : BaseApiController
    {
        [HttpGet] //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()

        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/activities/{id}
        public async Task<ActionResult<Activity>> GetActivity(int id)
        {
            return await Mediator.Send(new Details.Query() { Id = id });
        }

        [HttpPost] //api/activities
        public async Task<IActionResult> CreateActivity(Activity activity)
        {
            //activity.Id = null;

            return Ok(await Mediator.Send(new Create.Command { Activity = activity }));
        }

        [HttpPut("{id}")] //api/activities/{id}
        public async Task<IActionResult> EditActivity(int id, Activity activity)
        {
            activity.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Activity = activity }));
        }

        [HttpDelete("{id}")] //api/activities/{id}
        public async Task<IActionResult> DeleteActiviy(int id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }

    }
}
