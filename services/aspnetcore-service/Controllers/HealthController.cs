using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TemplateMonorepo.AspNetCoreService.Controllers
{
  [ApiController]
  [Route("")]
  public class HealthController : ControllerBase
  {


    private readonly ILogger<HealthController> _logger;

    public HealthController(ILogger<HealthController> logger)
    {
      _logger = logger;
    }

    [HttpGet]
    public Response<Health> Get()
    {
      _logger.LogInformation("Retrieve service health");
      return new Response<Health>(new Health
      {
        // TODO: Make this dynamic
        App = "@template-monorepo/aspnetcore-service",
        Version = "v0.0.1"
      });
    }
  }
}
