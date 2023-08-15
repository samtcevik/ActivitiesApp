using Activities.Persistence.Contexts;
using MediatR;
using Microsoft.EntityFrameworkCore.Update.Internal;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Activities.Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public int Id { get; set; }
        }

        public class Handler : BaseHandler, IRequestHandler<Command>
        {
            public Handler(DataContext context) : base(context)
            {
                
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);
                _context.Remove(activity);
                await _context.SaveChangesAsync();

                return Unit.Value; 
            }
        }
    }
}
