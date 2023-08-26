using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using AutoMapper;
using MediatR;

namespace Activities.Application.Activities
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : BaseHandler, IRequestHandler<Command>
        {
            public Handler(DataContext context, IMapper mapper) : base(context, mapper)
            {
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Activity.Id);

                //_mapper.Map<Activity,Activity>(request.Activity, activity);
                activity.Title = request.Activity.Title ?? activity.Title;
                activity.Category = request.Activity.Category ?? activity.Category;
                activity.City = request.Activity.City ?? activity.City;
                activity.Venue = request.Activity.Venue ?? activity.Venue;
                activity.Date = request.Activity?.Date ?? activity.Date;
                activity.Description = request.Activity.Description ?? activity.Description;
                
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
