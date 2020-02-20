using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Prometheus.Models;
using Prometheus.Services;

namespace Prometheus.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly IJobsService _jobsService;

        public JobsController(IJobsService jobsService)
        {
            _jobsService = jobsService;
        }

        [HttpGet]
        public Task<IEnumerable<Job>> Get([FromQuery] Filter filter)
        {
            return _jobsService.GetJobs(filter);
        }

        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
    }
}
