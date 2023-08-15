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
    
        public BaseHandler()
        {
            //Do nothing
        }

        public BaseHandler(DataContext context) 
        {
            _context = context;
        }


        public BaseHandler(DataContext context, IMapper mapper) : this(context)
        {
            _mapper = mapper;
        }


    }
}
