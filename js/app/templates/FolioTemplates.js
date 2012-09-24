var FO = FO || {};

FO.Templates = {};

FO.Templates.SignItem = '<a href="#work/<%= id %>">\
                            <h<%= hVal %> class="title-<%= tVal %>"><%= title %></h2>\
                        </a>';

FO.Templates.Poster = '<div id="poster-wrapper">\
                           <div id="poster" class="poster-<%= model.get("id") %>">\
                                <a id="poster-title" href="<%= model.get("extURL") %>" target="_blank"><h2><%= model.get("title") %></h2></a>\
                                <div id="description">\
                                    <p><%= model.get("description") %></p>\
                                </div>\
                                <p class="client"><%= model.get("client") %></p>\
                                <a href="<%= model.get("extURL") %>" target="_blank"><%= model.get("extURL").replace("http://", "") %></a>\
                            </div>\
                        </div>';