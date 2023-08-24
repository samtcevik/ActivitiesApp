using Activities.Persistence.Contexts;
using MediatR;

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
