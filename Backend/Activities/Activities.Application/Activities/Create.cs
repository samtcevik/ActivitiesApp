using Activities.Domain.Entities;
using Activities.Persistence.Contexts;
using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;

namespace Activities.Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : BaseHandler, IRequestHandler<Command>
        {
            public Handler(DataContext context) : base(context)
            {
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Activities.Add(request.Activity);
                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
