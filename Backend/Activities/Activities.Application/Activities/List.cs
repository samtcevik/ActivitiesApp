using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Activities.Application.Activities
{
    public class List
    {
        public class Query : IRequest<List<Activity>> { }
        public class Handler :BaseHandler, IRequestHandler<Query, List<Activity>>
        {
            public Handler(DataContext context, ILogger logger) : base(context, logger)
            {
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Activities.ToListAsync();
            }
        }
    }
}
