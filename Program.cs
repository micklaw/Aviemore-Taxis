using System.Threading.Tasks;
using Dotented;
using Microsoft.Extensions.DependencyInjection;
using AviemoreTaxis.Components;
using AviemoreTaxis.Pages;

namespace AviemoreTaxis
{
    class Program
    {
        static async Task Main(string[] args)
        {
            var services = new ServiceCollection();
            var dotented = services.AddDotented((builder) => 
            {
                return builder
                    .WithComponent<Asset>()
                    .WithComponent<Service>()
                    .WithComponent<Testimonial>()
                    .WithPage<Home>((options) =>  { options.SingleOnly = true; })
                    .WithPage<About>()
                    .WithPage<Contact>()
                    .WithPage<Project>()
                    .WithPage<Services>()
                    .Build();
            });

            await dotented.Generate();
        }
    }
}
