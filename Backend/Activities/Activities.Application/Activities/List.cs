using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace Activities.Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }
        public class Handler :BaseHandler, IRequestHandler<Query, List<Activity>>
        {
            public Handler(DataContext context) : base(context)
            {
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}
