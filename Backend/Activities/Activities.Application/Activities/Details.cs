using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Activities.Application.Activities
{
    public class Details
    {
        public class Query : IRequest<Activity> {
            public int Id { get; set; }
        }

        public class Handler : BaseHandler, IRequestHandler<Query, Activity>
        {
            public Handler(DataContext context, ILogger logger) : base(context, logger){ }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.FindAsync(request.Id);
            }
        }
    }
}
