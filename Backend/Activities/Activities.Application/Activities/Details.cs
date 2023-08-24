using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using MediatR;

namespace Activities.Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity> {
            public int Id { get; set; }
        }

        public class Handler : BaseHandler, IRequestHandler<Query, Activity>
        {
            public Handler(DataContext context) : base(context){ }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}
