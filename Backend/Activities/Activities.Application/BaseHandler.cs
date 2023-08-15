using Activities.Persistence.Contexts;
using AutoMapper;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Activities.Application
{
    public class BaseHandler
    {
        protected readonly IMapper _mapper;
        protected readonly DataContext _context;
        protected readonly ILogger _logger;
        public BaseHandler()
        {
            //Do nothing
        }

        public BaseHandler(DataContext context, ILogger logger) 
        {
            _context = context;
            _logger = logger;
        }


        public BaseHandler(DataContext context, IMapper mapper, ILogger logger) : this(context, logger)
        {
            _mapper = mapper;
        }


    }
}
