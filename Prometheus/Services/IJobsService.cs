using System.Collections.Generic;
using System.Threading.Tasks;
using Prometheus.Models;

namespace Prometheus.Services
{
    public interface IJobsService
    {
        Task<IEnumerable<Job>> GetJobs(Filter filter);
    }
}