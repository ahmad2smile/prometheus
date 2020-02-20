using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Prometheus.Models;

namespace Prometheus.Services
{
    public class JobsService : IJobsService
    {
        private readonly IHttpClientFactory _clientFactory;

        public JobsService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<IEnumerable<Job>> GetJobs(Filter filter)
        {
            var request = new HttpRequestMessage(HttpMethod.Get,
                $"https://jobs.github.com/positions.json?description={filter.Search}&location={filter.Location}");
            request.Headers.Add("Accept", "application/json");
            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (!response.IsSuccessStatusCode)
            {
                return null;
            }

            var stream = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<IEnumerable<Job>>(stream);

        }
    }
}
