var FO = FO || {};

FO.Templates = {};

FO.Templates.SignItem = '<a href="#work/<%= id %>">\
                            <h<%= hVal %> class="title-<%= tVal %>"><%= title %></h2>\
                        </a>';

FO.Templates.Poster = '<div id="poster-wrapper">\
					        <div id="poster">\
					            <h2><%= title %></h2>\
					            <div id="description">\
					                <p><%= description %></p>\
					            </div>\
					            <p class="client"><%= client %></p>\
					            <a href="#"><%= URL %></a>\
					        </div>\
					    </div>';