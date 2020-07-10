 using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Linq;
using System.Threading.Tasks;
using Crafts.Models;
using Crafts.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Crafts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;
        public ProductService productService { get; }
        public IEnumerable<Product> Products;

         private readonly IHttpClientFactory _clientFactory;

        public ProductController(ILogger<WeatherForecastController> logger, ProductService ProductServices, IHttpClientFactory clientFactory)
        {
            _logger = logger;
            productService = ProductServices;
            _clientFactory = clientFactory;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {   
            return productService.GetProducts();
        }

        [Route("rate")]
        [HttpGet]
        public ActionResult Get([FromQuery] string ProductId,[FromQuery] int Rating)
        {
            productService.AddRating(ProductId, Rating);
            return Ok();
        }
    }
}