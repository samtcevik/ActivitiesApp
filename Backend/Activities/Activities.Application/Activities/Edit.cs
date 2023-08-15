using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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

                _mapper.Map(request.Activity, activity);
                activity.Title = request.Activity.Title ?? activity.Title;
                
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
