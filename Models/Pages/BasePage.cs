using Dotented.Interfaces;

namespace AviemoreTaxis.Pages
{
    public abstract class BasePage : DotentedContent
    {
        public string PageTitle { get; set; }

        public string PageDescription { get; set; }
    }
}